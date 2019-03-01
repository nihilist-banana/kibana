/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License;
 * you may not use this file except in compliance with the Elastic License.
 */

import { KibanaFunctionalTestDefaultProviders } from 'x-pack/test/types/providers';

// tslint:disable:no-default-export
export default function advancedSettingsApp({
  loadTestFile,
}: KibanaFunctionalTestDefaultProviders) {
  describe('Advanced Settings', function canvasAppTestSuite() {
    this.tags('ciGroup2'); // CI requires tags ヽ(゜Q。)ノ？
    loadTestFile(require.resolve('./feature_controls/advanced_settings_security'));
    loadTestFile(require.resolve('./feature_controls/advanced_settings_spaces'));
  });
}