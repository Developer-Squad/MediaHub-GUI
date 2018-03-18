import React from 'react';

export class Row extends React.Component {
    /*
    constructor(props){
        super(props);
        this.state = {
            value:null
        };
    }
    val(){
        var type = this.props.file.filetype;
        if(type === 'mp4' || type === 'mkv' || type === 'avi')
            this.setState({value:'../assets/video.png'});
        else if(type === 'mp3' || type === 'wav')
            this.setState({value:'../assets/music.png'});
        else if(type === 'folder')
            this.setState({value:'../assets/folder.png'});
        else
            this.setState({value:'../assets/icon.png'});
    }
    setsrc(e) {
        this.val;
        e.target.setAttribute('src', this.state.value);
    }*/
    render() {
        return(
        <div className = "row">
            <img src = 'assets/folder.png' />
            <h3>{this.props.file.filename}</h3>
            <h3>{this.props.file.filesize}</h3>
        </div>
        );
    }
}