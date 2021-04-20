import { getStorageShortName } from '/@/utils/helper/envHelper';
import { createStorage as create } from './storageCache';
import { enableStorageEncryption } from '/@/settings/encryptionSetting';
/**
 * @description 创建配置
 * @param storage
 * @returns {Object}
 */
const createOptions = (storage = sessionStorage) => {
  return {
    // 调试模式不加密
    hasEncrypt: enableStorageEncryption,
    storage,
    prefixKey: getStorageShortName(),
  };
};

export const WebStorage = create(createOptions());

export const createStorage = (storage: Storage = sessionStorage) => {
  return create(createOptions(storage))!;
};

export default WebStorage;