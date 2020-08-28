import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as registrationActions from '../../redux/actions/registrationActions';
class RegistrationForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			form_params: {
				type: 'text',
				required: true,
				onChange: props.handleForm,
			},
			form_schema: [
				{ input_name: 'name', type: 'text', label: 'Nombre' },
				{ input_name: 'lastName', type: 'text', label: 'Apellido' },
				{ input_name: 'tlf', type: 'tel', label: 'Teléfono' },
				{ input_name: 'direction', type: 'text', label: 'Dirección' },
				{ input_name: 'dob', type: 'date', label: 'Fecha de nacimiento' },
			],
		};
	}

	render() {
		const { form_schema, form_params } = this.state;
		const { formSubmitted, formData, formLoading, formError } = this.props;
		return (
			<form className='registration'>
				{form_schema.map((item) => (
					<div className='registration__container' key={item.input_name}>
						<label htmlFor={item.input_name} className='registration__container--label'></label>
						<input
							{...form_params}
							type={item.type}
							name={item.input_name}
							id={item.input_name}
							value={formData[item.input_name]}
							className='registration__container--input'
						/>
					</div>
				))}
			</form>
		);
	}
}
const mapStateToProps = (state) => state.registrationReducer;

export default connect(mapStateToProps, registrationActions)(RegistrationForm);
