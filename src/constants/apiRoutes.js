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
