import React from 'react';

import TextEditor from './components/text-editor/TextEditor';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: []
        }
    }

    getTextEditor = (editorState) => {
        this.setState({editorState: editorState});
        console.log(editorState);
    }

    render() {
        return (
            <div>
                <TextEditor onChange={this.getTextEditor}/>
            </div>
        );
    }
}

export default App;