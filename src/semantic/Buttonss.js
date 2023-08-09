import React from 'react'
import { Button, Icon, Modal, Header } from 'semantic-ui-react'


export default function Buttonss() {
	const [x, setx] = React.useState(false)

	function handlePrimary() {
		setx(true)
	}

	return (
		<div>

			<Button color='blue' onClick={handlePrimary}>Primary</Button>
			<Button color='red'>Primary</Button>
			<Button color='green' fluid>Primary</Button>
			<Button icon='angle up' />
			<Icon name='phone volume' color='red' />
			<br /><br />

			<Modal
				closeIcon
				open={x}
				onClose={() => setx(true)}
				onOpen={() => setx(true)}
			>
				<Header icon='archive' content='Archive Old Messages' />
				<Modal.Content>
					<p>
						Your inbox is getting full, would you like us to enable automatic
						archiving of old messages?
					</p>
				</Modal.Content>
				<Modal.Actions>
					<Button color='red' onClick={() => setx(false)}>
						<Icon name='remove' /> No
					</Button>
					<Button color='green'>
						<Icon name='checkmark' /> Yes
					</Button>
				</Modal.Actions>
			</Modal>


		</div>
	)
}
