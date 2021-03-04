export * from './components/button';
export * from './components/type';
export * from './components/generator';
export * from './components/form';
export { default as Meter } from './components/meter';
export { default as OTPDigits } from './components/OTPDigits';
export * from './components/colored-digits';
export { VaultContext, VaultProvider } from './components/vault/Vault';
export { default as VaultUI } from './components/vault/VaultUI';
export { default as SiteIcon } from './components/vault/SiteIcon';
export { default as themes } from './styles/themes';
export { changeLanguage } from './i18n/trans';

import { initialise } from './i18n/trans';

initialise().catch(err => console.error(err));
