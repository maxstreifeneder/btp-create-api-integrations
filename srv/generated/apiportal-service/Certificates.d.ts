/*
 * Copyright (c) 2022 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v2';
import { History } from './History';
import type { CertificatesApi } from './CertificatesApi';
import { CertificateStores, CertificateStoresType } from './CertificateStores';
/**
 * This class represents the entity "Certificates" of service "apiportal".
 */
export declare class Certificates<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CertificatesType<T>
{
  readonly _entityApi: CertificatesApi<T>;
  /**
   * Technical entity name for Certificates.
   */
  static _entityName: string;
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath: string;
  /**
   * All key fields of the Certificates entity
   */
  static _keys: string[];
  /**
   * Cert Name.
   * Maximum length: 256.
   * @nullable
   */
  certName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Cs Key.
   * Maximum length: 255.
   * @nullable
   */
  csKey?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * Maximum length: 2048.
   * @nullable
   */
  description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Format.
   * Maximum length: 256.
   * @nullable
   */
  format?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Life Cycle.
   * @nullable
   */
  lifeCycle?: History<T> | null;
  /**
   * Name.
   * Maximum length: 200.
   */
  name: DeserializedType<T, 'Edm.String'>;
  /**
   * Store Name.
   * Maximum length: 200.
   */
  storeName: DeserializedType<T, 'Edm.String'>;
  /**
   * Password.
   * Maximum length: 256.
   * @nullable
   */
  password?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Store Type.
   * Maximum length: 256.
   * @nullable
   */
  storeType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Expiry Date.
   * Maximum length: 256.
   * @nullable
   */
  expiryDate?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Issuer Email.
   * Maximum length: 2048.
   * @nullable
   */
  issuerEmail?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Subject Email.
   * Maximum length: 2048.
   * @nullable
   */
  subjectEmail?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Sign Alg Name.
   * Maximum length: 256.
   * @nullable
   */
  signAlgName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Is Valid.
   * Maximum length: 256.
   * @nullable
   */
  isValid?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Valid From.
   * Maximum length: 256.
   * @nullable
   */
  validFrom?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Version.
   * Maximum length: 256.
   * @nullable
   */
  version?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Content.
   * @nullable
   */
  content?: DeserializedType<T, 'Edm.Binary'> | null;
  /**
   * One-to-one navigation property to the {@link CertificateStores} entity.
   */
  certificateStore?: CertificateStores<T> | null;
  constructor(_entityApi: CertificatesApi<T>);
}
export interface CertificatesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  certName?: DeserializedType<T, 'Edm.String'> | null;
  csKey?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  format?: DeserializedType<T, 'Edm.String'> | null;
  lifeCycle?: History<T> | null;
  name: DeserializedType<T, 'Edm.String'>;
  storeName: DeserializedType<T, 'Edm.String'>;
  password?: DeserializedType<T, 'Edm.String'> | null;
  storeType?: DeserializedType<T, 'Edm.String'> | null;
  expiryDate?: DeserializedType<T, 'Edm.String'> | null;
  issuerEmail?: DeserializedType<T, 'Edm.String'> | null;
  subjectEmail?: DeserializedType<T, 'Edm.String'> | null;
  signAlgName?: DeserializedType<T, 'Edm.String'> | null;
  isValid?: DeserializedType<T, 'Edm.String'> | null;
  validFrom?: DeserializedType<T, 'Edm.String'> | null;
  version?: DeserializedType<T, 'Edm.String'> | null;
  content?: DeserializedType<T, 'Edm.Binary'> | null;
  certificateStore?: CertificateStoresType<T> | null;
}
//# sourceMappingURL=Certificates.d.ts.map