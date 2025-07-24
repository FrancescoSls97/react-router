export default function ContactsPage() {

    return(

        <>
        <div class="p-5 mb-4 bg-warning rounded-3">
            <div class="container-fluid py-5">
                <h1 class="display-5 fw-bold">Contattaci</h1>
                <p class="col-md-8 fs-4">
                    Stai provando a contattarci per un rimborso o per segnalare un problema?
                    Cè il pulsante qui sotto
                </p>
                <button class="btn btn-danger btn-lg" type="button">
                    NON PUOI
                </button>
            </div>
        </div>
        <div className="container">
            <div class="card">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmS-J3fg__BjYl9ZOV7ovl195zzjiMmCXa9g&amp;s" className="card-top-img" alt="EH VOLEVI!"></img>
              <div class="card-body">
                <h5 class="card-title">EH!!! VOLEVI</h5>
                <p class="card-text">GUARDA CHE FACCIA NON SE LO ASPETTAVA!!!</p>
              </div>
            </div>
        </div>
        
        </>
    )
}