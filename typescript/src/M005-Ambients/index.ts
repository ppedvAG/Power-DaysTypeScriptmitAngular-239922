// Wenn wir ein pure JS package installieren wie z.B. luxon haben wir keine Typinformationen zur Verfuegung.
// D. h. kein Intellisense usw.
// `npm install luxon`
import { DateTime } from 'luxon';
// Error: Could not find a declaration file for module 'luxon'.

// definitelytyped bietet declartion files fuer viele gaengige packages.
// https://definitelytyped.org/
// `npm install -D @types/luxon`

const days = DateTime.fromJSDate(new Date(1999, 12, 31)).day;

// in node_modules nachschauen unter luxon und @types/luxon
// dort gibt es eine index.d.ts
// alternativ cursor auf luxon im import statement setzen und mit F12
// zur declaration file springen
