/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { useMemo } from '@wordpress/element';
import { AddressForm } from '@woocommerce/base-components/cart-checkout';
import { useCheckoutAddress, useStoreEvents } from '@woocommerce/base-context';
import CheckboxControl from '@woocommerce/base-components/checkbox-control';

/**
 * Internal dependencies
 */
import PhoneNumber from '../../phone-number';

const Block = ( {
	showCompanyField = false,
	showApartmentField = false,
	showPhoneField = false,
	requireCompanyField = false,
	requirePhoneField = false,
}: {
	showCompanyField: boolean;
	showApartmentField: boolean;
	showPhoneField: boolean;
	requireCompanyField: boolean;
	requirePhoneField: boolean;
} ): JSX.Element => {
	const {
		defaultAddressFields,
		setShippingFields,
		shippingFields,
		setShippingAsBilling,
		shippingAsBilling,
		billingFields,
		setPhone,
	} = useCheckoutAddress();
	const { dispatchCheckoutEvent } = useStoreEvents();

	const addressFieldsConfig = useMemo( () => {
		return {
			company: {
				hidden: ! showCompanyField,
				required: requireCompanyField,
			},
			address_2: {
				hidden: ! showApartmentField,
			},
		};
	}, [ showCompanyField, requireCompanyField, showApartmentField ] );

	return (
		<>
			<AddressForm
				id="shipping"
				type="shipping"
				onChange={ setShippingFields }
				values={ shippingFields }
				fields={ Object.keys( defaultAddressFields ) }
				fieldConfig={ addressFieldsConfig }
			/>
			{ showPhoneField && (
				<PhoneNumber
					isRequired={ requirePhoneField }
					value={ billingFields.phone }
					onChange={ ( value ) => {
						setPhone( value );
						dispatchCheckoutEvent( 'set-phone-number', {
							step: 'shipping',
						} );
					} }
				/>
			) }
			<CheckboxControl
				className="wc-block-checkout__use-address-for-billing"
				label={ __(
					'Use same address for billing',
					'woo-gutenberg-products-block'
				) }
				checked={ shippingAsBilling }
				onChange={ ( checked: boolean ) =>
					setShippingAsBilling( checked )
				}
			/>
		</>
	);
};

export default Block;