import {_} from '@report-toolkit/common';

import {OPTIONS} from './common.js';
import {handler as transform} from './transform.js';

export const command = 'redact <file>';

export const desc = 'Shortcut for "transform redact --pretty"';

export const builder = yargs => yargs.options(OPTIONS.OUTPUT);

export const handler = (opts = {}) => {
  const transformIds = opts.transform
    ? ['redact', ...opts.transform]
    : ['redact', 'json'];
  transform({
    ...opts,
    pretty: _.isUndefined(opts.pretty) ? true : opts.pretty,
    transform: transformIds
  });
};
