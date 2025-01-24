
function TextInput() {
    return (
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
    );
}

export default TextInput;