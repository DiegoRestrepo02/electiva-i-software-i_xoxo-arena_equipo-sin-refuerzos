export const NotFoundPage = () => {
    return (
        <>
            <div className="row">
                <div className="col-12">
                    <div className="d-flex align-items-center justify-content-center min-vh-100 px-2">
                        <div className="text-center rounded">
                            <h1 className="display-1 fw-bold">404</h1>
                            <p className="fs-2 fw-medium mt-4">Oops! Página no encontrada</p>
                            <p className="mt-4 mb-5">La página que buscas no existe o se ha movido.</p>
                            <a href="/" className="btn btn-sm btn-primary fw-semibold rounded-pill px-4 py-2">¡VOLVER!</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
};