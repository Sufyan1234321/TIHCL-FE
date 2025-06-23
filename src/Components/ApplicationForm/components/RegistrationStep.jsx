import React, { memo } from 'react';

const RegistrationStep = memo(({
    formData,
    errors,
    onChange,
    onBlur,
    onNext,
    districts = [],
    mandals = [],
    isLoadingDistricts,
    isLoadingMandals }) => {

    // Modify the onChange handler to store names instead of IDs
    const handleDistrictChange = (e) => {
        const districtId = e.target.value;
        const selectedDistrict = districts.find(d => d.districtId === districtId);
        onChange({
            target: {
                name: 'district',
                value: selectedDistrict ? selectedDistrict.districtName : ''
            }
        });
    };

    const handleMandalChange = (e) => {
        const mandalId = e.target.value;
        const selectedMandal = mandals.find(m => m.mandalId === mandalId);
        onChange({
            target: {
                name: 'mandal',
                value: selectedMandal ? selectedMandal.mandalName : ''
            }
        });
    };

    // Find the current selected IDs for the dropdowns
    const selectedDistrictId = districts.find(d => d.districtName === formData.district)?.districtId || '';
    const selectedMandalId = mandals.find(m => m.mandalName === formData.mandal)?.mandalId || '';
    return (
        <div className="step step-1">
            <div className="card">
                <div className="card-header bg-theme text-white">
                    <h6 className="mb-0">Registration</h6>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className={`form-control ${errors.nameEnterprise ? 'is-invalid' : ''}`}
                                    id="nameEnterprise"
                                    name="nameEnterprise"
                                    placeholder="Name of the enterprise"
                                    value={formData.nameEnterprise}
                                    onChange={onChange}
                                    onBlur={onBlur}
                                />
                                <label htmlFor="nameEnterprise" className='text-dark'>Name of the Enterprise</label>
                                {errors.nameEnterprise &&
                                    <div className="invalid-feedback">{errors.nameEnterprise}</div>}
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className={`form-control ${errors.namePromoter ? 'is-invalid' : ''}`}
                                    id="namePromoter"
                                    name="namePromoter"
                                    placeholder="Name of the Promoter"
                                    value={formData.namePromoter}
                                    onChange={onChange}
                                    onBlur={onBlur}
                                />
                                <label htmlFor="namePromoter" className='text-dark'>Name of the Promoter</label>
                                {errors.namePromoter &&
                                    <div className="invalid-feedback">{errors.namePromoter}</div>}
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className="form-floating mb-3">
                                <select
                                    className={`form-select ${errors.constitution ? 'is-invalid' : ''}`}
                                    id="constitution"
                                    name="constitution"
                                    value={formData.constitution}
                                    onChange={onChange}
                                    onBlur={onBlur}
                                >
                                    <option value="">Select Constitution</option>
                                    <option value="sole property">sole property</option>
                                    <option value="Partnership">Partnership</option>
                                    <option value="LLP">LLP</option>
                                    <option value="Limited Company">Limited Company</option>
                                </select>
                                <label htmlFor="constitution" className='text-dark'>Constitution</label>
                                {errors.constitution &&
                                    <div className="invalid-feedback">{errors.constitution}</div>}
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className="form-floating mb-3">
                                <input
                                    type="date"
                                    className={`form-control ${errors.dateProduction ? 'is-invalid' : ''}`}
                                    id="dateProduction"
                                    name="dateProduction"
                                    value={formData.dateProduction}
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    max={new Date(new Date().setDate(new Date().getDate() - 1)).toISOString().split('T')[0]}
                                />
                                <label htmlFor="dateProduction" className='text-dark'>Date of Commencement Production</label>
                                {errors.dateProduction &&
                                    <div className="invalid-feedback">{errors.dateProduction}</div>}
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className={`form-control ${errors.udyamRegistration ? 'is-invalid' : ''}`}
                                    id="udyamRegistration"
                                    name="udyamRegistration"
                                    placeholder="Udyam Registration Number"
                                    value={formData.udyamRegistration}
                                    onChange={onChange}
                                    onBlur={onBlur}
                                />
                                <label htmlFor="udyamRegistration" className='text-dark'>Udyam Registration Number</label>
                                {errors.udyamRegistration &&
                                    <div className="invalid-feedback">{errors.udyamRegistration}</div>}
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className={`form-control ${errors.contactDetails ? 'is-invalid' : ''}`}
                                    id="contactDetails"
                                    name="contactDetails"
                                    placeholder="Alternative Contact Details"
                                    value={formData.contactDetails}
                                    onChange={onChange}
                                    onBlur={onBlur}
                                />
                                <label htmlFor="contactDetails" className='text-dark'>Alternative Contact Details</label>
                                {errors.contactDetails &&
                                    <div className="invalid-feedback">{errors.contactDetails}</div>}
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                    value={formData.email}
                                    onChange={onChange}
                                    onBlur={onBlur}
                                />
                                <label htmlFor="email" className='text-dark'>Email Id</label>
                                {errors.email &&
                                    <div className="invalid-feedback">{errors.email}</div>}
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className="form-floating mb-3">
                                <select
                                    className={`form-select ${errors.industrialPark ? 'is-invalid' : ''}`}
                                    id="industrialPark"
                                    name="industrialPark"
                                    value={formData.industrialPark}
                                    onChange={onChange}
                                    onBlur={onBlur}
                                >
                                    <option value="">Select Industrial Park</option>
                                    <option value="Industrial Park 1">Industrial Park 1</option>
                                </select>
                                <label htmlFor="industrialPark">Industrial Park</label>
                                {errors.industrialPark &&
                                    <div className="invalid-feedback">{errors.industrialPark}</div>}
                            </div>
                        </div>



                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className="form-floating mb-3">
                                <select
                                    className={`form-select ${errors.state ? 'is-invalid' : ''}`}
                                    id="state"
                                    name="state"
                                    value={formData.state}
                                    onChange={onChange}
                                    onBlur={onBlur}
                                >
                                    <option value="">Select State</option>
                                    <option value="Telangana">Telangana</option>
                                    <option value="Other">Other</option>
                                </select>
                                <label htmlFor="state">State</label>
                                {errors.state &&
                                    <div className="invalid-feedback">{errors.state}</div>}
                            </div>
                        </div>


                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className="form-floating mb-3">
                                <select
                                    className={`form-select ${errors.district ? 'is-invalid' : ''}`}
                                    id="district"
                                    name="district"
                                    value={formData.district}
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    required
                                    disabled={isLoadingDistricts}
                                >
                                    <option value="">
                                        {isLoadingDistricts ? 'Loading districts...' : 'Select District'}
                                    </option>
                                    {districts.map(district => (
                                        <option key={district.districtId} value={district.districtId}>
                                            {district.districtName}
                                        </option>
                                    ))}
                                </select>
                                <label htmlFor="district">District</label>
                                {errors.district && (
                                    <div className="invalid-feedback">{errors.district}</div>
                                )}
                                {isLoadingDistricts && (
                                    <div className="text-muted small mt-1"></div>
                                )}
                            </div>
                        </div>

                        {/* Mandal Field */}
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className="form-floating mb-3">
                                <select
                                    className={`form-select ${errors.mandal ? 'is-invalid' : ''}`}
                                    id="mandal"
                                    name="mandal"
                                    value={formData.mandal}
                                    onChange={onChange}
                                    onBlur={onBlur}
                                    required
                                    disabled={!formData.district || isLoadingMandals}
                                >
                                    <option value="">
                                        {isLoadingMandals ? 'Loading mandals...' : 'Select Mandal'}
                                    </option>
                                    {mandals.map(mandal => (
                                        <option key={mandal.mandalId} value={mandal.mandalId}>
                                            {mandal.mandalName}
                                        </option>
                                    ))}
                                </select>
                                <label htmlFor="mandal">Mandal</label>
                                {isLoadingMandals && formData.district && (
                                    <div className="text-muted small mt-1"></div>
                                )}
                                {errors.mandal && (
                                    <div className="invalid-feedback">{errors.mandal}</div>
                                )}
                            </div>
                        </div>

                        <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                            <div className="form-floating mb-3">
                                <input
                                    type="text"
                                    className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                                    id="address"
                                    name="address"
                                    placeholder="Address"
                                    value={formData.address}
                                    onChange={onChange}
                                    onBlur={onBlur}
                                />
                                <label htmlFor="address" className='text-dark'>Address</label>
                                {errors.address &&
                                    <div className="invalid-feedback">{errors.address}</div>}
                            </div>
                        </div>



                    </div>
                    <div className="text-end">
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={onNext}
                            disabled={Object.keys(errors).some(key =>
                                ['nameEnterprise', 'namePromoter', 'constitution',
                                    'dateProduction', 'udyamRegistration', 'contactDetails',
                                    'state', 'industrialPark', 'district', 'mandal',
                                    'address', 'email'].includes(key) && errors[key]
                            )}
                        >
                            Next
                            <span className="bi bi-arrow-right ms-2"></span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );

});

export default RegistrationStep;