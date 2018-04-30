

// astNodeVisitor that looks for and documents violet.respondTo({name:...})
var examineNode = function(node, e, parser, currentSourceName) {

    const tgtObjMethod = 'respondTo';
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
      var matchAndGetParamVal = function(tgtPropName, properties) {
        var getVal = function(propItem) {
          var result = propItem.value;
          if (result.value) return result.value;
          if (result.type == 'ArrayExpression') {
            return result.elements.map(arrNode=>{
              return arrNode.value;
            }).join(', ');
          }
          if (result.type == 'MemberExpression') {
            return '(expression)';
          }
          console.log(`Unexpected type ${result.type}`);
          return result;
        };
        var pVal = '(unnamed)';
        var pNdx = node.arguments[0].properties.findIndex(matchParamName(tgtPropName));
        if (pNdx!==-1)
          pVal = getVal(node.arguments[0].properties[pNdx]);
        // console.log(`Matching:${tgtPropName}. Found at ${pNdx} - value:`, pVal);
        return pVal;
      };
      var intentName = matchAndGetParamVal('name', node.arguments[0].properties);
      var intentExpecting = matchAndGetParamVal('expecting', node.arguments[0].properties);

      var comment = `${leadingComments}\n<br><b>Responds To:</b> ${intentExpecting}\n @event ${intentName}`;

      e = {
        comment: `/** ${comment} */`,
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
