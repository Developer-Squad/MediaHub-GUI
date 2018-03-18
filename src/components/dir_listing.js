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
        <table className = "row">
        	<tr>
	            <td><img src = {require('../assets/folder.png')} className="image-dir" /></td>
	            <td><h3 className="filename-dir">{this.props.file.filename}</h3></td>
	            <td><h3 className="filesize-dir">{this.props.file.filesize}</h3></td>
	        </tr>
        </table>
        );
    }
}