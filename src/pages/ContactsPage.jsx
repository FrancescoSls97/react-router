export default function ContactsPage() {

    return(

        <>
        <div className="p-5 mb-4 bg-warning rounded-3">
            <div className="container-fluid py-5">
                <h1 className="display-5 fw-bold">Contattaci</h1>
                <p className="col-md-8 fs-4">
                    Stai provando a contattarci per un rimborso o per segnalare un problema?
                    Cè il pulsante qui sotto
                </p>
                <button className="btn btn-danger btn-lg" type="button">
                    NON PUOI
                </button>
            </div>
        </div>
        <div className="container">
            <div className="card">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmS-J3fg__BjYl9ZOV7ovl195zzjiMmCXa9g&amp;s" className="card-top-img" alt="EH VOLEVI!"></img>
              <div className="card-body">
                <h5 className="card-title">EH!!! VOLEVI</h5>
                <p className="card-text">GUARDA CHE FACCIA NON SE LO ASPETTAVA!!!</p>
              </div>
            </div>
        </div>
        
        </>
    )
}