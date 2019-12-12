'use strict';

// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import {
  App,
  WaterDocsContentProvider,
  WaterCompletionItemProvider,
} from './app';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log(
    'Congratulations, your extension "vscode-water-helper" is now active!'
  );
  let app = new App();
  app.setConfig();
  let docs = new WaterDocsContentProvider();
  let completionItemProvider = new WaterCompletionItemProvider();
  let registration = vscode.workspace.registerTextDocumentContentProvider(
    'water-helper',
    docs
  );

  let completion = vscode.languages.registerCompletionItemProvider(
    [
      {
        language: 'vue',
        scheme: 'file',
      },
      {
        language: 'html',
        scheme: 'file',
      },
    ],
    completionItemProvider,
    '',
    ' ',
    ':',
    '<',
    '"',
    "'",
    '/',
    '@',
    '('
  );
  let vueLanguageConfig = vscode.languages.setLanguageConfiguration('vue', {
    wordPattern: app.WORD_REG,
  });

  context.subscriptions.push(app, registration, completion, vueLanguageConfig);
}

// this method is called when your extension is deactivated
export function deactivate() {}
