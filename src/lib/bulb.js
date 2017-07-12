export const connect = onDisconnected => {
	console.log('Requesting Bluetooth Device...');
	return navigator.bluetooth
		.requestDevice({
			filters: [{ services: [0xffe5] }]
		})
		.then(device => {
			console.log('> Found ' + device.name);
			console.log('Connecting to GATT Server...');
			device.addEventListener('gattserverdisconnected', onDisconnected);
			return device.gatt.connect();
		})
		.then(server => {
			console.log('Getting Service 0xffe5 - Light control...');
			return server.getPrimaryService(0xffe5);
		})
		.then(service => {
			console.log('Getting Characteristic 0xffe9 - Light control...');
			return service.getCharacteristic(0xffe9);
		})
		.then(characteristic => {
			console.log('All ready!');
			return characteristic;
			// onConnected();
		})
		.catch(error => {
			console.log('Argh! ' + error);
		});
};

export const powerOn = ledCharacteristic => {
	let data = new Uint8Array([0xcc, 0x23, 0x33]);
	return ledCharacteristic
		.writeValue(data)
		.catch(err => console.log('Error when powering on! ', err));
};

export const powerOff = ledCharacteristic => {
	let data = new Uint8Array([0xcc, 0x24, 0x33]);
	return ledCharacteristic
		.writeValue(data)
		.catch(err => console.log('Error when switching off! ', err));
};

export const setColor = (ledCharacteristic, color) => {
	let [red, green, blue] = typeof color === 'string' ? hexToRgb(color) : color;

	let data = new Uint8Array([0x56, red, green, blue, 0x00, 0xf0, 0xaa]);
	return ledCharacteristic
		.writeValue(data)
		.catch(err => console.log('Error when writing value! ', err));
};

export const hexToRgb = hex =>
	hex
		.replace(
			/^#?([a-f\d])([a-f\d])([a-f\d])$/i,
			(m, r, g, b) => '#' + r + r + g + g + b + b
		)
		.substring(1)
		.match(/.{2}/g)
		.map(x => parseInt(x, 16));
