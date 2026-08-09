import Stripe from 'stripe';
// test-dummy key, not a real secret — for scanner validation only
const stripe = new Stripe("sk_live_FAKE0000TESTONLY0000000000");
export { stripe };
