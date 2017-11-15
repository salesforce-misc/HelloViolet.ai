

// astNodeVisitor that looks for and documents violet.respondTo({name:...})
var examineNode = function(node, e, parser, currentSourceName) {

    const tgtObjMethod = 'respondTo';
    const tgtParamName = 'name';
    if (node.type === 'CallExpression' && node.callee.property && node.callee.property.name === tgtObjMethod) {
      // console.log(node);

      var leadingComments = node.leadingComments;
      if (!leadingComments) leadingComments = [];
      leadingComments = leadingComments.map(cb=>{return cb.value}).join('\n');

      //console.log(node.arguments[0].properties)
      // ndx of first node whose key.name==='name'
      var matchParamName = (tgtVal) => {
        return (el) => { return el.key.name === tgtVal; }
      };
      var findNdx = (paramArr, tgtParamName)=>{
        return paramArr.findIndex(e=>{return e.key.name === tgtParamName});
      };
      if (!node.arguments[0].properties) return; // happens we do not have an object as param 1
      var pNdx = node.arguments[0].properties.findIndex(matchParamName(tgtParamName));
      var pVal = '(unnamed)'
      if (pNdx!==-1)
        pVal = node.arguments[0].properties[pNdx].value.value;
      // console.log(pVal);

      e = {
        comment: `/** ${leadingComments}\n @var ${pVal} */`,
        lineno: node.loc.start.line,
        columnno: node.loc.start.column,
        filename: currentSourceName,
        range: node.range
      };
      parser.emit('jsdocCommentFound', e, parser);
      return;
    }
};

exports.astNodeVisitor = {
  visitNode: function(node, e, parser, currentSourceName) {
    try {
      examineNode(node, e, parser, currentSourceName);
    } catch (ex) {
      console.log('Error when processing: ' + currentSourceName, node);
      console.log(ex);
    }
  }
};
