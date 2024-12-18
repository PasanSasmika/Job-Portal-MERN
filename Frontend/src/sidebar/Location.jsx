import React from 'react'
import InputField from '../components/InputFIeld'

function Location({handleChange}) {
  return (
    <div>
        <h4 className='text-lg font-medium mb-2'>Location</h4>

        <div>
            <label className='sidebar-label-container'>
                <input type="radio" name="test" id="test" value="" onChange={handleChange} />
                <span className='checkmark'></span>All

            </label>

            <InputField handleChange={handleChange} value="london" title="London" name="test"/>
            <InputField handleChange={handleChange} value="boston" title="boston" name="test"/>
            <InputField handleChange={handleChange} value="san francisco" title="san francisco" name="test"/>
            <InputField handleChange={handleChange} value="seattle" title="seattle" name="test"/>
            <InputField handleChange={handleChange} value="brussels" title="brussels" name="test"/>
            <InputField handleChange={handleChange} value="brisban" title="brisban" name="test"/>


        </div>
    </div>
  )
}

export default Location