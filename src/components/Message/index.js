import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


export const Message = ({ message, showMessage, variant }) => {
	const colors = {
		'success': '#08a092',
		'error': '#ce2029',
		'warning': ''
	};

	useEffect(() => {
		setInterval(() => {
            showMessage({ ...message, open: false })
        }, 3000);
	});

	return (
		message.open && (
			<Text color={colors[variant]}>
				{message.message}
			</Text>
		)
	);
};

const Text = styled.Text`
  textAlign: center;
  color: ${props => props.is_error ? '#ce2029' : '#08a092'};
  fontSize: 16px;
  marginBottom: 15px;
  marginHorizontal: 20px;
`;

const mapStateToProps = ({ message }) => ({ message: message });
const mapDispatchToProps = dispatch => bindActionCreators({ showMessage }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Message);