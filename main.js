
const mivaSnippets = require("./snippets/snippets.json");

class CompletionProvider {

	provideCompletionItems(editor, context) {
		let snippets = [];
		
		for (let snippet in mivaSnippets) {
			let item = new CompletionItem(mivaSnippets[snippet].prefix, CompletionItemKind.File);
            console.log(mivaSnippets[snippet].description);
	
			item.documentation = mivaSnippets[snippet].description;
			item.insertText = mivaSnippets[snippet].body;
			item.tokenize = true;
			
			snippets.push(item)
		}
		
		return snippets;
	};
}


nova.assistants.registerCompletionAssistant("miva", new CompletionProvider());
