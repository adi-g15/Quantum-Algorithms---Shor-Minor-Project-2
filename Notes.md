Packages installed: python-qiskit-aer, python-qiskit, openblas-lapack (for this
'blas', 'cblas', 'lapack' was removed, reinstall them)

(25/26) installing python-qiskit-ibmq-provider                              [##########################################] 100%

    To use this package you need an API token from your
    IBM Quantum account page.

    https://quantum-computing.ibm.com/account

    Once you have it, run the following:

    from qiskit import IBMQ
    IBMQ.save_account('MY_API_TOKEN')


Optional dependencies for python-qiskit
    python-qiskit-experiments: tools for building, running, and analysis of experiments on noisy quantum computers
    python-qiskit-finance: stock/securities problems, portfolio optimizations and finance experiments
    python-qiskit-machine-learning: sample datasets and quantum classification algorithms
    python-qiskit-nature: ground state energy computations, excited states and dipole moments of molecules
    python-qiskit-optimization: quantum optimization algorithms

undefined symbol `_slamch`: https://github.com/Qiskit/qiskit-aer/issues/1067#issuecomment-740144128, ie. lapack library missing, just install openblas with lapack support enabled, `openblas-lapack`

