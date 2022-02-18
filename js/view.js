new fullpage('#fullpage', {
	autoScrolling: true,
	licenseKey: '995524B0-B0D648B2-A256D93E-5D2F78ED',
});

function next() {
	fullpage_api.moveTo(1, 1);
}