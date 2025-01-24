import  './App.css' ;
import  React, { useState }  from  'react' ;

// project to build a Form in React and handle form submission

function  App () {

    const [formData, setFormData] = useState({
        text: '',
        checkBox: false,
        radio: '',
        select: ''
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    }

    return  (
        <div  className='form-container' >
            <h1>Form Handling in React</h1>
            <form> {/* Text Input */}
                <div className='form-control'>
                    <label>
                        Text Input:
                        <input
                            type="text"
                            name="text"
                            value={formData.text}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                {/* Checkbox */}
                <div className='form-control'>
                    <label>
                        CheckBox:
                        <input
                            type="checkbox"
                            name="checkBox"
                            checked={formData.checkBox}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                {/* Radio Buttons */}
                <div className='form-control'>
                    <label>
                        Radio:
                        </label>
                        <input
                            type="radio"
                            name="radio"
                            value="radio1"
                            checked={formData.radio === 'radio1'}
                            onChange={handleChange}
                        /> Radio 1
                        <input
                            type="radio"
                            name="radio"
                            value="radio2"
                            checked={formData.radio === 'radio2'}
                            onChange={handleChange}
                        /> Radio 2
                </div>
                {/* Select Dropdown */}
                <div className='form-control'>
                    <label>
                        Select: 
                        <select
                            name="select"
                            value={formData.select}
                            onChange={handleChange} >
                            <option value="">Select an option</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                        </select>
                    </label>
                </div>
            </form>

            {/* Displaying Form Data */}
            <div className='form-data'>
                <h2>Form Data:</h2>
                <strong>Text:</strong> {formData.text || 'NA'} <br />
                <strong>CheckBox:</strong> {formData.checkBox ? 'Checked' : 'Unchecked'} <br />
                <strong>Radio:</strong> {formData.radio || 'NA'} <br />
                <strong>Select:</strong> {formData.select || 'NA'} <br />
            </div>

        </div>
    );
}

export  default  App;