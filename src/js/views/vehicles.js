import React from 'react';
import { Link } from "react-router-dom";

export default function Vehicles() {
  return (
    <div>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">Nave 1</h5>
              <p class="card-text">Esta es una tarjeta más amplia con texto de apoyo a continuación como introducción natural a contenido adicional. Este contenido es un poco más largo.</p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Última actualización hace 3 minutos</small>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">Nave 2</h5>
              <p class="card-text">Esta tarjeta tiene texto de apoyo a continuación como una introducción natural a contenido adicional.</p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Última actualización hace 3 minutos</small>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card h-100">
            <div class="card-body">
              <h5 class="card-title">Nave 3</h5>
              <p class="card-text">Esta es una tarjeta más amplia con texto de apoyo a continuación como introducción natural a contenido adicional. Esta tarjeta tiene un contenido aún más largo que la primera para mostrar esa acción de igual altura.</p>
            </div>
            <div class="card-footer">
              <small class="text-muted">Última actualización hace 3 minutos</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
