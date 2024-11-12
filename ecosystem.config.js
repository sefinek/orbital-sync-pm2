module.exports = {
	apps: [{
		name: 'orbital',
		script: 'orbital-sync',

		// Logging configuration
		log_date_format: 'HH:mm:ss.SSS DD.MM.YYYY',
		merge_logs: true,
		log_file: '/var/log/orbital-sync/combined.log',
		out_file: '/var/log/orbital-sync/out.log',
		error_file: '/var/log/orbital-sync/error.log',

		// Application restart policy settings
		wait_ready: false,
		autorestart: true,
		max_restarts: 10,
		min_uptime: 20000,
		restart_delay: 5000,
		exp_backoff_restart_delay: 3000,

		// Environment variables configuration
		env: {
			NODE_ENV: 'production',
		},
	}],
};