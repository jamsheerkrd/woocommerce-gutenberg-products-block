/**
 * External dependencies
 */
import withFilteredAttributes from '@woocommerce/base-hocs/with-filtered-attributes';
import { FormStep } from '@woocommerce/base-components/cart-checkout';
import { useCheckoutContext } from '@woocommerce/base-context';

/**
 * Internal dependencies
 */
import Block from './block';
import attributes from './attributes';

const FrontendBlock = ( {
	title,
	description,
	requireCompanyField,
	requirePhoneField,
	showApartmentField,
	showCompanyField,
	showPhoneField,
	showStepNumber,
}: {
	title: string;
	description: string;
	requireCompanyField: boolean;
	requirePhoneField: boolean;
	showApartmentField: boolean;
	showCompanyField: boolean;
	showPhoneField: boolean;
	showStepNumber: boolean;
} ) => {
	const { isProcessing: checkoutIsProcessing } = useCheckoutContext();

	return (
		<FormStep
			id="shipping-fields"
			disabled={ checkoutIsProcessing }
			className="wc-block-checkout__shipping-fields"
			title={ title }
			description={ description }
			showStepNumber={ showStepNumber }
		>
			<Block
				requireCompanyField={ requireCompanyField }
				requirePhoneField={ requirePhoneField }
				showApartmentField={ showApartmentField }
				showCompanyField={ showCompanyField }
				showPhoneField={ showPhoneField }
			/>
		</FormStep>
	);
};

export default withFilteredAttributes( attributes )( FrontendBlock );