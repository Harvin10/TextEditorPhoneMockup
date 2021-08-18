import React from 'react';
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import styles from './TextEditor.module.css';

class TextEditor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty()
        }
    }

    setEditorState = (editorState) => {
        this.setState({
            editorState: editorState
        }, this.props.onChange(convertToRaw(this.state.editorState.getCurrentContent())));
    }

    render() {
        return (
            <>
                <div className={styles.editor}>
                    <Editor
                        placeholder='test'
                        editorState={this.state.editorState}
                        onEditorStateChange={this.setEditorState}
                    />
                </div>
                {/* <div onClick={this.displayEditorState.bind(this)}>button</div> */}
            </>
        );
    }
}

export default TextEditor;