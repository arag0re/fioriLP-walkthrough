/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require(["de/icontec/antonstadie/walkthrough/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});
