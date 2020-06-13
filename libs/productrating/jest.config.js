module.exports = {
  name: 'productrating',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/productrating',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
