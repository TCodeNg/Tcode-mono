module.exports = {
  name: 'order-detail-ui',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/order-detail-ui',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
