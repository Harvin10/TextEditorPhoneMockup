import React from 'react';
import { Editor } from 'react-draft-wysiwyg';

class TextEditor extends React.Component {
    render() {
        return(
            <Editor
                wrapperClassName="wrapper-class"
                editorClassName="editor-class"
                toolbarClassName="toolbar-class"
                wrapperStyle={<wrapperStyleObject>}
                editorStyle={<editorStyleObject>}
                toolbarStyle={<toolbarStyleObject>}
            />
        );
    }
}

export default TextEditor;