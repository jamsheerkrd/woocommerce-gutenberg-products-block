/**
 * External dependencies
 */
import { __ } from '@wordpress/i18n';
import { DISPLAY_CART_PRICES_INCLUDING_TAX } from '@woocommerce/block-settings';
import PropTypes from 'prop-types';
import { TotalsItem } from '@woocommerce/blocks-checkout';
import classnames from 'classnames';

const TotalsFees = ( { currency, values, className, ...props } ) => {
	const { total_fees: totalFees, total_fees_tax: totalFeesTax } = values;
	const feesValue = parseInt( totalFees, 10 );

	if ( ! feesValue ) {
		return null;
	}

	const feesTaxValue = parseInt( totalFeesTax, 10 );

	return (
		<TotalsItem
			className={ classnames(
				'wc-block-components-totals-fees',
				className
			) }
			currency={ currency }
			label={ __( 'Fees', 'woo-gutenberg-products-block' ) }
			value={
				DISPLAY_CART_PRICES_INCLUDING_TAX
					? feesValue + feesTaxValue
					: feesValue
			}
			{ ...props }
		/>
	);
};

TotalsFees.propTypes = {
	currency: PropTypes.object.isRequired,
	values: PropTypes.shape( {
		total_fees: PropTypes.string,
		total_fees_tax: PropTypes.string,
	} ).isRequired,
};

export default TotalsFees;
