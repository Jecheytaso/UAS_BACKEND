$(document).ready(function() {
    // Fungsi untuk mengambil dan menampilkan pemasukkan
    function fetchIncome() {
        $.ajax({
            url: '/api/income',
            method: 'GET',
            success: function(data) {
                $('#daily-income').text('Rp ' + data.dailyIncome);
                $('#monthly-income').text('Rp ' + data.monthlyIncome);
            }
        });
    }

    // Fungsi untuk mengambil dan menampilkan data menu
    function fetchMenu() {
        $.ajax({
            url: '/api/menu',
            method: 'GET',
            success: function(data) {
                let tableBody = $('#menu-table tbody');
                tableBody.empty();
                data.forEach(function(menu) {
                    tableBody.append(`
                        <tr>
                            <td>${menu.id}</td>
                            <td>${menu.name}</td>
                            <td>Rp ${menu.price}</td>
                            <td>
                                <button class="btn btn-warning edit-menu" data-id="${menu.id}">Edit</button>
                                <button class="btn btn-danger delete-menu" data-id="${menu.id}">Delete</button>
                            </td>
                        </tr>
                    `);
                });
            }
        });
    }

    // Panggil fungsi untuk mengambil data saat halaman dimuat
    fetchIncome();
    fetchMenu();

    // Event listener untuk tombol tambah menu
    $('#add-menu').click(function() {
        // Implementasi untuk menambahkan menu
    });

    // Event listener untuk tombol edit menu
    $(document).on('click', '.edit-menu', function() {
        // Implementasi untuk mengedit menu
    });

    // Event listener untuk tombol delete menu
    $(document).on('click', '.delete-menu', function() {
        // Implementasi untuk menghapus menu
    });
});