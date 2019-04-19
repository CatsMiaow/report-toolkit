import {createInspect} from './rules-helper';

describe('rule:cpu-usage', function() {
  let inspect;

  describe('when the configured mode is "under"', function() {
    beforeEach(async function() {
      inspect = await createInspect('../../src/rules/cpu-usage', {
        mode: 'under',
        threshold: 1000,
        cpu: 'all'
      });
    });

    describe('when the avg CPU usage in the report is under threshold', function() {
      it('should report with usage ms, rounded down', function() {
        return expect(
          inspect('../fixture/report-001.json'),
          'to complete with values',
          {
            id: 'cpu-usage',
            message:
              'Kernel+User Avg CPU (ms) is under the specified threshold',
            data: {threshold: 1000, usage: 82}
          }
        );
      });
    });
  });

  describe('when the configured mode is "over"', function() {
    beforeEach(async function() {
      inspect = await createInspect('../../src/rules/cpu-usage', {
        mode: 'over',
        threshold: 82,
        cpu: 'all'
      });
    });

    describe('when the avg CPU usage in the report is over threshold', function() {
      it('should report with usage ms, rounded up', function() {
        return expect(
          inspect('../fixture/report-001.json'),
          'to complete with values',
          {
            id: 'cpu-usage',
            message: 'Kernel+User Avg CPU (ms) is over the specified threshold',
            data: {threshold: 82, usage: 83}
          }
        );
      });
    });
  });
});
