import React, { useState, useRef } from 'react';
import $ from 'jquery';



const UsersForm = (props) => {
	const [selectedFile, setSelectedFile] = useState(null);
	$(document).ready(()=>{ 
      $('#photo').change(function(){ 
        const file = this.files[0]; 
        console.log(file); 
        if (file){ 
          let reader = new FileReader(); 
          reader.onload = function(event){ 
            console.log(event.target.result); 
            $('#imgPreview').attr('src', event.target.result).attr('width','150px'); 
          } 
          reader.readAsDataURL(file); 
        } 
      }); 
    }); 	

	return (<form onSubmit={props.addUser}>
				<h3>React CRUD and File Upload.....</h3> 
				<input 
					value={props.currentUser} 
					onChange={props.updateUser} 
					required
				/>
				<input 
					value={props.currentDept} 
					onChange={props.updateDept} 
					required
				/>
				<div> 
					<div> 
						<input type="file" id="photo" onChange={props.onFileChange} /> 
						<button onClick={props.onFileUpload}> 
							Upload! 
						</button> 
					</div> 
					{props.fileData()} 
				</div>
				<div> 
                <img id="imgPreview" src="#" alt="pic" /> 
            </div> 
            
				<button type="submit">Submit btn</button>
			</form>)
}
export default UsersForm;