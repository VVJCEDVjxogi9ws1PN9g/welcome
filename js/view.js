new fullpage('#fullpage', {
	// anchors: ['introPage', 'stepsPage', 'featPage', 'socialsPage'],
	autoScrolling: true,
	licenseKey: 'YOUR_KEY_HERE',
});

function next() {
	fullpage_api.moveTo(1, 1);
}