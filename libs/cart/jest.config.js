module.exports = {
  name: 'cart',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/cart',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
