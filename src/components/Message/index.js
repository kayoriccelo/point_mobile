import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { showMessage } from './store/ducks';


export const Message = ({ message, showMessage }) => {
	const colors = {
		'success': '#08a092',
		'error': '#ce2029',
		'warning': '#ffff00'
	};

	useEffect(() => {
		setInterval(() => {
            showMessage({ ...message, open: false })
        }, 7000);
	}, []);

	return (
		message.open && (
			<Text color={colors[message.variant]}>
				{message.message}
			</Text>
		)
	);
};

const Text = styled.Text`
  textAlign: center;
  color: ${props => props.color || '#08a092'};
  fontSize: 16px;
  marginBottom: 15px;
  marginHorizontal: 20px;
`;

const mapStateToProps = ({ message }) => ({ message: message });
const mapDispatchToProps = dispatch => bindActionCreators({ showMessage }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Message);