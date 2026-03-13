/**
 * Entry point for client-side JS bundle.
 *
 * Imports bem-core desktop platform and project blocks.
 * Built with Vite + vite-plugin-bem-levels.
 */

// bem-core desktop platform (i-bem, i-bem-dom, jQuery, events, etc.)
import 'bem:identify';
import 'bem:inherit';
import 'bem:objects';
import 'bem:functions';
import 'bem:functions__throttle';
import 'bem:functions__debounce';
import 'bem:next-tick';
import 'bem:strings__escape';

// Events system
import 'bem:events';
import 'bem:events__channels';

// i-bem core
import 'bem:i-bem__internal';
import 'bem:i-bem';
import 'bem:i-bem__collection';

// DOM utilities
import 'bem:jquery__config';
import 'bem:jquery';
import 'bem:jquery__event_type_pointernative';
import 'bem:jquery__event_type_pointerclick';
import 'bem:jquery__event_type_pointerpressrelease';
import 'bem:jquery__event_type_winresize';
import 'bem:dom';

// i-bem-dom and its subsystems
import 'bem:i-bem-dom__events';
import 'bem:i-bem-dom__events_type_dom';
import 'bem:i-bem-dom__events_type_bem';
import 'bem:i-bem-dom__collection';
import 'bem:i-bem-dom';
import 'bem:i-bem-dom__init';
import 'bem:i-bem-dom__init_auto';

// Observable events (with BEM DOM support)
import 'bem:events__observable';
import 'bem:events__observable_type_bem-dom';

// Browser APIs
import 'bem:keyboard__codes';

// Project blocks
import 'bem:input';
import 'bem:search';
import 'bem:form';
import 'bem:header';
import 'bem:yandex-metrica-api';
