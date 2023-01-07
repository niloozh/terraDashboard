// INTERNAL API ROUTES
export const REGISTER_API_ROUTE = '/api/auth/users/';
export const LOGIN_API_ROUTE = '/api/create-token/';
export const LOGOUT_API_ROUTE = '/api/logout/';
export const REFRESH_TOKEN_API_ROUTE = '/api/auth/jwt/refresh/';
export const MY_PROFILE_API_ROUTE = '/api/profile/me/';
export const ACTIVATE_USER_API_ROUTE = '/api/activate-user/';
export const RESEND_ACTIVATE_EMAIL_API_ROUTE = '/api/resend-activation-email/';
export const SEND_RESET_PASSWORD_EMAIL_API_ROUTE = '/api/send-reset-password-email/';
export const PASSWORD_SET_API_ROUTE = '/api/reset-password/';
export const AUTHENTICATE_USER_API_ROUTE = '/api/auth/authenticate-user/';
export const GOOGLE_AUTH_TOKEN_API_ROUTE = '/api/auth/google-auth/';
export const GOOGLE_AUTH_HANDLE_TOKEN_API_ROUTE = '/api/auth/google-auth-handle-token/';
export const MICROSOFT_AUTH_TOKEN_API_ROUTE = '/api/auth/microsoft-auth/';
export const MICROSOFT_AUTH_HANDLE_TOKEN_API_ROUTE = '/api/auth/microsoft-auth-handle-token/';
export const FACEBOOK_AUTH_TOKEN_API_ROUTE = '/api/auth/facebook-auth/';
export const FACEBOOK_AUTH_HANDLE_TOKEN_API_ROUTE = '/api/auth/facebook-auth-handle-token/';
export const CAPTCHA_API_ROUTE = '/api/captcha/';
export const STRIPE_CREATE_PAYMENT_INTENT_API_ROUTE = '/api/create-payment-intent/';
export const STRIPE_RETRIEVE_PAYMENT_INTENT_API_ROUTE = '/api/retrieve-payment-intent/';
export const STRIPE_CREATE_SETUP_INTENT_API_ROUTE = '/api/create-setup-intent/';
export const STRIPE_RETRIEVE_SETUP_INTENT_API_ROUTE = '/api/retrieve-setup-intent/';
export const STRIPE_ADD_ACTIVE_CARD_FOR_CUSTOMER = '/api/add-active-card-to-stripe-customer/';
export const STRIPE_CUSTOMER_SOURCE_HANDLER = '/api/stripe-customer-source-handler/';
// WEBSOCKET API ROUTES
export const WEBSOCKET_CHAT_API_ROUTE = `/wss/public-chat/`;

// EXTERNAL API ROUTES
export const GET_IP_INFO_ROUTE = 'https://geolocation-db.com/json/';
export const GET_BAR_DATA_API_ROUTE =
  'https://node-api.flipsidecrypto.com/api/v2/queries/276d95e6-d53d-412b-8164-13a270108b3d/data/latest';
export const GET_TX_DATA_API_ROUTE =
  'https://node-api.flipsidecrypto.com/api/v2/queries/2f45154f-ad12-44bc-b9a7-df92f8b1f227/data/latest';
export const GET_WALLET_DATA_API_ROUTE =
  'https://node-api.flipsidecrypto.com/api/v2/queries/1d4d24e6-2dec-4ae5-9bce-db13e477f172/data/latest';
export const GET_DEPLOYMENT_DATA_API_ROUTE =
  'https://node-api.flipsidecrypto.com/api/v2/queries/f8396d8a-0e3f-437e-8c63-bd2f3a315e40/data/latest';
export const GET_CONTRACT_DATA_API_ROUTE =
  'https://node-api.flipsidecrypto.com/api/v2/queries/b653fd0f-8afa-43e9-8c05-db9b6906a881/data/latest';
export const GET_SUPPLY_CARD_DATA_API_ROUTE =
  'https://node-api.flipsidecrypto.com/api/v2/queries/af45fd3b-2448-4473-bf8c-8a9936ea0064/data/latest';
export const GET_STAKE_DATA_API_ROUTE =
  'https://node-api.flipsidecrypto.com/api/v2/queries/23bb16fb-20f2-41a7-be4a-47de468b77a0/data/latest';
export const GET_STAKED_TYPE_API_ROUTE =
  'https://node-api.flipsidecrypto.com/api/v2/queries/592a75da-fa9d-4632-b173-8c45886dbae8/data/latest';
export const GET_STAKE_ACTION_COUNT_DATA =
  'https://node-api.flipsidecrypto.com/api/v2/queries/6f00e7a4-ef54-4fa8-ae36-06a0eda90779/data/latest';
export const GET_VESTING_DATA =
  'https://node-api.flipsidecrypto.com/api/v2/queries/eb106ef2-5962-4de6-bb7c-a6730e76622e/data/latest';
export const GET_IBC_DATA =
  'https://node-api.flipsidecrypto.com/api/v2/queries/3c45cac5-b05b-4bcc-9500-3627447b0f52/data/latest';
export const GET_STAKED_LUNA_PER =
  'https://node-api.flipsidecrypto.com/api/v2/queries/edc74886-e47f-4550-bcc6-f5901160fe40/data/latest';
export const GET_REWARD_RECEIVER_DATA =
  'https://node-api.flipsidecrypto.com/api/v2/queries/2f326e08-4676-46a5-aad1-1f208fcb3ca4/data/latest';
export const GET_TOTAL_STAKING_REWARD =
  'https://node-api.flipsidecrypto.com/api/v2/queries/9e2aec85-8899-471c-9414-cec68fec4353/data/latest';
export const RICHLIST_DATA =
  'https://node-api.flipsidecrypto.com/api/v2/queries/64c02beb-148d-4eb4-a08f-513baebb1bf3/data/latest';
export const REWARD_DISTRIBUTION =
  'https://node-api.flipsidecrypto.com/api/v2/queries/3346d71f-f4cb-4390-957a-4dfa9c1906aa/data/latest';
export const GET_TRANSACTIONS_CARD_DATA =
  'https://node-api.flipsidecrypto.com/api/v2/queries/13c2231f-6e5c-48af-a8e4-e8a2ae37fda0/data/latest';
export const GET_BLOCK_DATA_ =
  'https://node-api.flipsidecrypto.com/api/v2/queries/b80b5a8b-935b-46af-9b1d-c9c53c3b8e58/data/latest';
export const GET_ALL_TIME_WALLET_COUNT =
  'https://node-api.flipsidecrypto.com/api/v2/queries/a378d67d-f2ad-4dcb-bc09-252caba8d303/data/latest';
export const GET_WALLET_DISTRIBUTION_BY_TRANSACTION =
  'https://node-api.flipsidecrypto.com/api/v2/queries/d09f8673-ff5e-481c-b4f1-c4da8319a0c1/data/latest';
export const GET_AVG_UNIQUE_SENDERS =
  'https://node-api.flipsidecrypto.com/api/v2/queries/6264a0f5-5e25-4cc6-9b19-9076dcc5040f/data/latest';
export const GET_TOP_10_USERS_BY_TX =
  'https://node-api.flipsidecrypto.com/api/v2/queries/b6960eef-5f52-4ecd-b5c2-22d01b9028c7/data/latest';

///////// SQL QUERIES LINK

export const GET_BAR_CODE =
  'https://app.flipsidecrypto.com/velocity/queries/276d95e6-d53d-412b-8164-13a270108b3d';
export const GET_TX_CODE =
  'https://app.flipsidecrypto.com/velocity/queries/2f45154f-ad12-44bc-b9a7-df92f8b1f227';
export const GET_WALLET_CODE =
  'https://app.flipsidecrypto.com/velocity/queries/1d4d24e6-2dec-4ae5-9bce-db13e477f172';
export const GET_DEPLOYMENT_CODE =
  'https://app.flipsidecrypto.com/velocity/queries/f8396d8a-0e3f-437e-8c63-bd2f3a315e40';
export const GET_CONTRACT_CODE =
  'https://app.flipsidecrypto.com/velocity/queries/b653fd0f-8afa-43e9-8c05-db9b6906a881';
export const GET_SUPPLY_CARD_CODE =
  'https://app.flipsidecrypto.com/velocity/queries/af45fd3b-2448-4473-bf8c-8a9936ea0064';
export const GET_STAKE_CODE =
  'https://app.flipsidecrypto.com/velocity/queries/23bb16fb-20f2-41a7-be4a-47de468b77a0';
export const GET_STAKED_TYPE_CODE =
  'https://app.flipsidecrypto.com/velocity/queries/592a75da-fa9d-4632-b173-8c45886dbae8';
export const GET_STAKE_ACTION_COUNT_CODE =
  'https://app.flipsidecrypto.com/velocity/queries/6f00e7a4-ef54-4fa8-ae36-06a0eda90779';
export const GET_VESTING_CODE =
  'https://app.flipsidecrypto.com/velocity/queries/eb106ef2-5962-4de6-bb7c-a6730e76622e';
export const GET_IBC_CODE =
  'https://app.flipsidecrypto.com/velocity/queries/3c45cac5-b05b-4bcc-9500-3627447b0f52';
export const GET_STAKED_LUNA_PER_CODE =
  'https://app.flipsidecrypto.com/velocity/queries/edc74886-e47f-4550-bcc6-f5901160fe40';
export const GET_REWARD_RECEIVER_CODE =
  'https://app.flipsidecrypto.com/velocity/queries/2f326e08-4676-46a5-aad1-1f208fcb3ca4';
export const GET_TOTAL_STAKING_REWARD_CODE =
  'https://app.flipsidecrypto.com/velocity/queries/9e2aec85-8899-471c-9414-cec68fec4353';
export const RICHLIST_CODE =
  'https://app.flipsidecrypto.com/velocity/queries/64c02beb-148d-4eb4-a08f-513baebb1bf3';
export const REWARD_DISTRIBUTION_CODE =
  'https://app.flipsidecrypto.com/velocity/queries/3346d71f-f4cb-4390-957a-4dfa9c1906aa';
export const GET_TRANSACTIONS_CARD_CODE =
  'https://app.flipsidecrypto.com/velocity/queries/13c2231f-6e5c-48af-a8e4-e8a2ae37fda0';
export const GET_BLOCK_CODE =
  'https://app.flipsidecrypto.com/velocity/queries/b80b5a8b-935b-46af-9b1d-c9c53c3b8e58';
export const GET_ALL_TIME_WALLET_COUNT_CODE =
  'https://app.flipsidecrypto.com/velocity/queries/a378d67d-f2ad-4dcb-bc09-252caba8d303';
export const GET_WALLET_DISTRIBUTION_BY_TRANSACTION_CODE =
  'https://app.flipsidecrypto.com/velocity/queries/d09f8673-ff5e-481c-b4f1-c4da8319a0c1';
export const GET_AVG_UNIQUE_SENDERS_CODE =
  'https://app.flipsidecrypto.com/velocity/queries/6264a0f5-5e25-4cc6-9b19-9076dcc5040f';
export const GET_TOP_10_USERS_BY_TX_CODE =
  'https://app.flipsidecrypto.com/velocity/queries/b6960eef-5f52-4ecd-b5c2-22d01b9028c7';
