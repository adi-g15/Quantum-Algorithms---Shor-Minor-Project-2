from qiskit_ibm_runtime import QiskitRuntimeService

options = {
	'backend_name': 'BACKEND'
}

runtime_inputs = {
	# Number of iterations to run.
	# Each iteration generates and runs
	# a random circuit.
	# 'iterations': 1 # integer
}

service = QiskitRuntimeService(
	channel='ibm_quantum'
)

job = service.run(
	program_id='hello-world',
	options=options,
	inputs=runtime_inputs
)

# Job id
print(job.job_id)
# See job status
print(job.status())

# Get results
result = job.result()
