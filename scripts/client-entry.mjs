/**
 * Entry point for client-side JS bundle.
 *
 * Imports bem-core desktop platform and project blocks.
 * Built with Vite + vite-plugin-bem-levels.
 *
 * Based on node_modules/bem-core/build/platforms/desktop.js
 * with only the modules needed by the project.
 */

// Core utilities (no dependencies)
import 'bem:identify';
import 'bem:inherit';
import 'bem:objects';
import 'bem:functions';
import 'bem:functions__debounce';
import 'bem:next-tick';

// Events system
import 'bem:events';

// i-bem core
import 'bem:i-bem__internal';
import 'bem:i-bem';

// DOM utilities
import 'bem:jquery__config';
import 'bem:jquery';
import 'bem:dom';

// i-bem-dom and its subsystems
import 'bem:i-bem-dom__events';
import 'bem:i-bem-dom__events_type_dom';
import 'bem:i-bem-dom__events_type_bem';
import 'bem:i-bem-dom__collection';
import 'bem:i-bem-dom';
import 'bem:i-bem-dom__init';
import 'bem:i-bem-dom__init_auto';

// Browser APIs
import 'bem:keyboard__codes';

// Project blocks
import 'bem:input';
import 'bem:search';
import 'bem:form';
import 'bem:header';
import 'bem:yandex-metrica-api';
