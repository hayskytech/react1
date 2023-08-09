import React from 'react'
import { useState } from 'react'
import { Input, Form } from 'semantic-ui-react'


export default function PhoneNum() {
	const [valid, setValid] = useState(false)
	const [txt, settxt] = useState('')

	function handleInp(e) {
		setValid(isNaN(e.target.value));
		settxt(e.target.value)
	}

	return (
		<div>
			<Form.Field>
				<label>Enter Password</label>
				<Input error={valid} type='text' value={txt} onChange={handleInp} />
			</Form.Field>
		</div>
	)
}
