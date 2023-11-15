let tugas = [];

const listArray = document.getElementById(`taskList`);

function list() {
  listArray.innerHTML = "";

  tugas.forEach(function (item) {
    const listItem = document.createElement(`li`);

    listItem.textContent = item;

    listArray.appendChild(listItem);
  });
}

function ambilNilaiDanTambah() {
  const inputTugas = document.getElementById(`inputTugas`);
  const textInputTugas = inputTugas.value;

  if (textInputTugas === undefined || textInputTugas === "") {
    alert(
      `masukan nama tugas dengan benar \ncontoh : Tugas Belajar Ipa Di Jam 20:00`
    );
    return;
  } else {
    tambahTugas(textInputTugas);
    list();
    return;
  }
}

function ambilNilaiDanHapus() {
  const inputTugas = document.getElementById(`inputTugas`);
  const textInputTugas = inputTugas.value;

  hapusTugas(textInputTugas);
  list();
}

function tambahTugas(namatugas) {
  let indextugas = tugas.indexOf(namatugas);
  if (indextugas < 0) {
    tugas.push(namatugas);
  } else {
    alert(`tugas sudah berada di dalam list`);
  }

  return tugas;
}

function hapusTugas(namatugas) {
  let indextugas = tugas.indexOf(namatugas);
  console.log(indextugas);
  if (indextugas >= 0) {
    tugas.splice(indextugas, 1);
  } else {
    alert(`Tugas tidak ditemukan di dalam list silahkan cek kembali`);
  }

  return tugas;
}
