// // Libraries
// import { useDispatch } from 'react-redux';
//
// // Actions
// import { layoutActions } from 'app/modules/slice';
//
// // Utils
// import { handleError } from 'app/utils/handleError';
// import { getCookie } from 'app/utils/cookie';
//
// // constants
// import { APP_CONFIG } from 'constants/appConfig';
//
// const PATH = 'app/hooks/useAuth';
//
// export const useAuth = (): boolean => {
//   const dispatch = useDispatch();
//
//   const actions = layoutActions;
//
//   const validate = () => {
//     try {
//       const dataCookie = JSON.parse(decodeURIComponent(getCookie(APP_CONFIG.U_OGS)) || '{}') || {};
//
//       if (!dataCookie || !dataCookie.token) {
//         return false;
//       }
//
//       dispatch(
//         actions.updateUser({
//           isUserChecked: true,
//           isAuthenticated: true,
//           isAccessDenied: false,
//           token: dataCookie.token,
//           user_id: dataCookie.user_id,
//           account_id: dataCookie.user_id,
//         }),
//       );
//
//       return true;
//     } catch (error) {
//       handleError(error, {
//         path: PATH,
//         name: 'validate',
//         args: {},
//       });
//
//       return false;
//     }
//   };
//
//   return validate();
// };
