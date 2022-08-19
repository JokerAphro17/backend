import React from "react";
import { Col, Row } from "react-bootstrap";

function Insertion(props) {
    return (
        <>
            <form>
                <Row>
                    <Col sm={12} md={4}>
                        <div class="form-group">
                            <label class="form-label">Type</label>
                            <select
                                name="options"
                                id="options"
                                class="form-control select-sm custom-select"
                            >
                                <option value="1" selected="">
                                    Choisir le type
                                </option>
                                <option value="OBNL">OBNL</option>
                                <option value="Association">Association</option>
                                <option value="Partie politique">
                                    Partie politique
                                </option>
                            </select>
                        </div>
                    </Col>
                    <Col sm={12} md={4}>
                        <div class="form-group">
                            <label class="form-label">Acronyme</label>
                            <input
                                type="text"
                                class="form-control form-control-sm"
                                name="example-text-input"
                                placeholder="Text.."
                            />
                        </div>
                    </Col>
                    <Col sm={12} md={4}>
                        <div class="form-group">
                            <label class="form-label">
                                Numero de telephone
                            </label>
                            <input
                                type="text"
                                class="form-control form-control-sm"
                                name="example-text-input"
                                placeholder="Text.."
                            />
                        </div>
                    </Col>
                    <Col sm={12} md={4}>
                        <div class="form-group">
                            <label class="form-label">Adresse mail</label>
                            <input
                                type="text"
                                class="form-control form-control-sm"
                                name="example-text-input"
                                placeholder="Text.."
                            />
                        </div>
                    </Col>
                    <Col sm={12} md={4}>
                        <div class="form-group">
                            <label class="form-label">Numero</label>
                            <input
                                type="text"
                                class="form-control form-control-sm"
                                name="example-text-input"
                                placeholder="Text.."
                            />
                        </div>
                    </Col>
                    <Col sm={12} md={4}>
                        <div class="form-group">
                            <label class="form-label">Date</label>
                            <input
                                type="text"
                                class="form-control form-control-sm"
                                name="example-text-input"
                                placeholder="Text.."
                            />
                        </div>
                    </Col>
                    <Col sm={12} md={12}>
                        <div class="form-group">
                            <label class="form-label">Le document</label>
                            <input
                                type="text"
                                class="form-control form-control-sm"
                                name="example-text-input"
                                placeholder="Text.."
                            />
                        </div>
                    </Col>
                </Row>
            </form>
        </>
    );
}

export default Insertion;
