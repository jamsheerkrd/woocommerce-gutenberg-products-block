/**
 * External dependencies
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { Main } from '@woocommerce/base-components/sidebar-layout';

/**
 * Internal dependencies
 */
import type { InnerBlockTemplate } from '../../types';

const ALLOWED_BLOCKS = [
	'woocommerce/checkout-express-payment',
	'woocommerce/checkout-shipping-address-block',
	'woocommerce/checkout-shipping-methods',
	'woocommerce/checkout-contact-information-block',
	'woocommerce/checkout-billing-address-block',
	'woocommerce/checkout-payment-block',
	'woocommerce/checkout-order-note-block',
	'woocommerce/checkout-actions-block',
];
const TEMPLATE: InnerBlockTemplate[] = [
	[ 'woocommerce/checkout-express-payment', {}, [] ],
	[ 'woocommerce/checkout-contact-information-block', {}, [] ],
	[ 'woocommerce/checkout-shipping-address-block', {}, [] ],
	[ 'woocommerce/checkout-billing-address-block', {}, [] ],
	[ 'woocommerce/checkout-shipping-methods', {}, [] ],
	[ 'woocommerce/checkout-payment-block', {}, [] ],
	[ 'woocommerce/checkout-order-note-block', {}, [] ],
	[ 'woocommerce/checkout-actions-block', {}, [] ],
];

// @todo templateLock all prevents load after saving content for some reason.
export const Edit = (): JSX.Element => {
	const blockProps = useBlockProps();

	return (
		<Main>
			<div { ...blockProps }>
				<InnerBlocks
					allowedBlocks={ ALLOWED_BLOCKS }
					template={ TEMPLATE }
					templateLock={ 'insert' }
				/>
			</div>
		</Main>
	);
};

export const Save = (): JSX.Element => {
	return (
		<div { ...useBlockProps.save() }>
			<InnerBlocks.Content />
		</div>
	);
};
